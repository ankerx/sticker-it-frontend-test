import {
  Accordion as AccordionItem,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AccordionDetails } from "../AccordionDetails/AccordionDetails";

import { colors } from "../../theme";

import { Content } from "../Header/Header";

export type Props = {
  label: string | undefined;
  content: Content;
};
export const Accordion = ({ label, content }: Props) => {
  console.log(content);
  return (
    <AccordionItem
      sx={{
        boxShadow: "none",
        mb: "1rem",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={content.type === "group" && <ExpandMoreIcon />}
        aria-controls="panel content"
        id="panel1a-header"
      >
        <Typography
          sx={{
            color: colors.blue,
            textTransform: "uppercase",
            fontSize: "16px",
          }}
        >
          {label}
        </Typography>
      </AccordionSummary>
      {content.items?.map((item) => {
        return (
          <AccordionItem
            key={item.id}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={item.items && <ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <Typography sx={{ fontSize: "16px" }}>{item.title}</Typography>
            </AccordionSummary>
            {item.items?.map((item) => (
              <AccordionDetails key={item.id} content={item} />
            ))}
          </AccordionItem>
        );
      })}
    </AccordionItem>
  );
};
