export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  /** Draw the closing hairline under the last row. */
  isLast: boolean;
  onToggle: () => void;
}
