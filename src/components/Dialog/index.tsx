import * as React from "react";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { isEmpty } from "lodash";

import FavoriteIcon from "../FavoriteIcon";

import * as S from "./styles";

interface constituentsProps {
  name: string;
  role: string;
}

interface ArtworkDetailProps {
  additionalImages: string[];
  constituents: constituentsProps[];
  artistPrefix: string;
  artistRole?: string;
  department: string;
  dimensions: string;
  medium: string;
  objectDate: string;
  objectID: number;
  objectURL: string;
  primaryImage: string;
  primaryImageSmall: string;
  title: string;
}

export interface DialogProps {
  open: boolean;
  artDetail: ArtworkDetailProps;
  onClose: (value?: string) => void;
}

export default function SimpleDialog(props: DialogProps) {
  const { onClose, open, artDetail } = props;

  if (!artDetail) return null;

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="md"
      onClose={() => onClose && onClose()}
      aria-labelledby="dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <strong>{artDetail.title}</strong>
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
            <img
              src={artDetail.primaryImageSmall}
              alt={artDetail.title}
              style={{
                maxWidth: 520,
                maxHeight: 620,
                borderRadius: 8,
                objectFit: "contain",
                background: "#f3f3f3",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/320x320?text=No+Image";
              }}
            />
          </Box>
          <Box flex={1} gap={2} display="flex" flexDirection="column">
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
                <Link href={artDetail.objectURL} target="_blank" rel="noopener">
                  Veja mais detalhes
                </Link>
              </S.DialogContent>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <FavoriteIcon isFavorite={false} />
      </DialogActions>
    </Dialog>
  );
}
