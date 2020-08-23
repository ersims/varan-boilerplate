import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

// Types
interface EmojiProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  'aria-label': string;
}

// Exports
export const Emoji = styled.span.attrs((props: EmojiProps) => ({ role: 'img', ...props }))`
  font-size: 1.1em;
  margin-left: 0.2em;
  margin-right: 0.2em;
`;
