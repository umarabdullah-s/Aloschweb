import React, { useState } from "react";
import styles from "./learningoutcome.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LearningOutcome = () => {
    const [expanded, setExpanded] = useState(0);

  const outcomes = [
    {
      title: "01: User-Centered Problem Solving Using Design Thinking",
      desc: "Answer → Master hiragana and katakana, basic greetings, and essential survival phrases.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "02: Design intuitive and visually appealing interfaces",
      desc: "Create beautiful and functional interfaces.",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26",
    },
    {
      title: "03: Expanding Horizons",
      desc: "Turn ideas into interactive prototypes.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
    {
      title: "03: Expanding Horizons",
      desc: "Turn ideas into interactive prototypes.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
    {
      title: "04: Practical Mastery",
      desc: "Turn ideas into interactive prototypes.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
    {
      title: "05: Advanced Communication",
      desc: "Turn ideas into interactive prototypes.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
    {
      title: "06: Native-Like Fluency",
      desc: "Turn ideas into interactive prototypes.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p className={styles.para1}>Learning Outcomes</p>
          <p className={styles.para2}>
            By the end of the program, students will be able to:
          </p>
        </div>
        <div className={styles.split}>
          
          <div className={styles.accordion}>
            {outcomes.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={() => setExpanded(index)}
                elevation={0}
                sx={{
                  transition: "all 0.35s ease",
                  "& .MuiCollapse-root": {
                    transition: "height 0.35s ease",
                  },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{item.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>

          
          <div className={styles.imageWrapper}>
            <img
              key={outcomes[expanded].image}
              src={outcomes[expanded].image}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningOutcome;
