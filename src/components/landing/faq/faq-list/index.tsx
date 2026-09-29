"use client";

import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { FaqItem } from "../faq-item";

interface FaqListProps {
  items: readonly { question: string; answer: string }[];
}

export const FaqList = ({ items }: FaqListProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <VStack align="stretch" gap="0">
      {items.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          isLast={index === items.length - 1}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? -1 : index))
          }
        />
      ))}
    </VStack>
  );
};

export default FaqList;
