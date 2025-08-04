import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogContent, DialogTitle, IconButton } from "@mui/material";
import useLocalStorage from "@src/hooks/useLocalStorage";
import { ArtworkDetailProps } from "@src/types/artwork";
import { isEmpty } from "lodash";

import FavoriteIcon from "../FavoriteIcon";
import ImageCarousel from "./ImageCarousel";
import * as S from "./styles";

export interface DialogProps {
  open: boolean;
  artDetail: ArtworkDetailProps;
  onClose: (value?: string) => void;
}

export default function ArtDetailDialog(props: DialogProps) {
  const { onClose, open, artDetail } = props;
  const [favorites] = useLocalStorage<number[]>("favorites", []);

  if (!artDetail) return null;

  const images: string[] = [];

  if (artDetail.additionalImages && artDetail.additionalImages.length > 0) {
    // Use a spread operator to add all additional images if they exist and are not empty
    images.push(...artDetail.additionalImages.filter(Boolean));
  } else if (artDetail.primaryImageSmall) {
    images.push(artDetail.primaryImageSmall);
  }

  const isFavorite = favorites.includes(artDetail.objectID);

  return (
    <S.StyledDialog
      open={open}
      fullWidth
      maxWidth="lg"
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
          <ImageCarousel images={images} title={artDetail.title} />
          <Box flex={1} gap={2} display="flex" flexDirection="column">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <FavoriteIcon
                isFavorite={isFavorite}
                objectID={artDetail.objectID}
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
