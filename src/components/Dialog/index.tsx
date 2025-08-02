import React from "react";
import { isEmpty } from "lodash";

import { DialogTitle, DialogContent, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import * as S from "./styles";
import FavoriteIcon from "../FavoriteIcon";
import useLocalStorage from "../../hooks/useLocalStorage";
import type { ArtworkDetailProps } from "../../types/artwork";

export interface DialogProps {
  open: boolean;
  artDetail: ArtworkDetailProps;
  onClose: (value?: string) => void;
}

export default function ArtDetailDialog(props: DialogProps) {
  const { onClose, open, artDetail } = props;
  const [favorites] = useLocalStorage<number[]>("favorites", []);

  if (!artDetail) return null;

  const isFavorite = favorites.includes(artDetail.objectID);

  return (
    <S.StyledDialog
      open={open}
      fullWidth
      maxWidth="md"
      onClose={() => onClose && onClose()}
      aria-labelledby="dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <S.DialogTitle>{artDetail.title}</S.DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => onClose && onClose()}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3}>
          <Box flexShrink={0}>
            <S.Image
              src={artDetail.primaryImageSmall}
              alt={artDetail.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/320x320?text=No+Image";
              }}
            />
          </Box>
          <Box flex={1} gap={2} display="flex" flexDirection="column">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <FavoriteIcon
                isFavorite={isFavorite}
                objectId={artDetail.objectID}
              />
            </div>

            {!isEmpty(artDetail.constituents) && (
              <S.DialogContent>
                <S.Title>Artistas</S.Title>
                <S.Description>
                  {artDetail.constituents.map((artist, index) => (
                    <span key={index}>
                      {artist.name}
                      <br />
                    </span>
                  ))}
                </S.Description>
              </S.DialogContent>
            )}
            <S.DialogContent>
              <S.Title>Fixa técnica</S.Title>
              <S.Description>
                {artDetail.medium}
                <br />
                {artDetail.dimensions}
              </S.Description>
            </S.DialogContent>

            <S.DialogContent>
              <S.Title>Departamento</S.Title>
              <S.Description>{artDetail.department}</S.Description>
            </S.DialogContent>

            <S.DialogContent>
              <S.Title>Data</S.Title>
              <S.Description>{artDetail.objectDate}</S.Description>
            </S.DialogContent>

            {artDetail.objectURL && (
              <S.DialogContent>
                <S.StyledLink
                  href={artDetail.objectURL}
                  target="_blank"
                  rel="noopener"
                >
                  Veja mais detalhes
                </S.StyledLink>
              </S.DialogContent>
            )}
          </Box>
        </Box>
      </DialogContent>
    </S.StyledDialog>
  );
}
