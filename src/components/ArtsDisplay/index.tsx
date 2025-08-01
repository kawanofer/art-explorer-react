import React from "react";

import * as S from "./styles";
import { isEmpty } from "lodash";

interface Artwork {
  objectID: number;
  primaryImageSmall: string;
  title: string;
  constituents?: { name: string }[];
  objectDate?: string;
  department?: string;
}

interface ArtsDisplayProps {
  artworks: Artwork[];
  onArtClick: (artwork: Artwork) => void;
}

export default function ArtsDisplay({
  artworks,
  onArtClick,
}: ArtsDisplayProps) {
  return (
    <S.ArtworkGrid>
      {artworks.map((artwork) => (
        <S.ArtworkCard
          key={artwork.objectID}
          onClick={() => onArtClick(artwork)}
        >
          <S.ImageContainer>
            <S.ArtworkImage
              src={artwork.primaryImageSmall}
              alt={artwork.title}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400x400?text=No+Image";
              }}
            />
          </S.ImageContainer>
          <S.CardContent>
            <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
            <S.InfoContainer>
              {!isEmpty(artwork.constituents) && (
                <S.InfoText>
                  {artwork.constituents.map((artist, index) => (
                    <span key={index}>
                      {artist.name}
                      <br />
                    </span>
                  ))}
                </S.InfoText>
              )}
              {!isEmpty(artwork.objectDate) && (
                <S.InfoText>{artwork.objectDate}</S.InfoText>
              )}
              {!isEmpty(artwork.department) && (
                <S.InfoText>{artwork.department}</S.InfoText>
              )}
            </S.InfoContainer>
          </S.CardContent>
        </S.ArtworkCard>
      ))}
    </S.ArtworkGrid>
  );
}
