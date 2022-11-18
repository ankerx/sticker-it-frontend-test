import {
  AccordionDetails as AccordionDetailsItem,
  Box,
  Typography,
} from "@mui/material";

export type Props = {
  content: {
    id: string;
    title: string;
    subtitle: string;
    iconUrl: string;
  };
};
export const AccordionDetails = ({ content }: Props) => {
  return (
    <>
      <AccordionDetailsItem key={content.id} sx={{ marginLeft: "2rem" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "49px", height: "49px" }}>
            <img src={content.iconUrl} alt="icon of sticker" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", marginRight: "23px" }}>
              {content.title}
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {content.subtitle}
            </Typography>
          </Box>
        </Box>
      </AccordionDetailsItem>
    </>
  );
};
