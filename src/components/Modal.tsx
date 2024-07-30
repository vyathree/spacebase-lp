"use client";
import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useId,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  open,
  onClose,
}) => {
  const [modalNode, setModalNode] = useState<HTMLDivElement>();
  const id = useId();

  const createModalNode = () => {
    const modalNode = document.createElement("div");
    modalNode.id = id;
    modalNode.style.setProperty("position", "fixed");
    modalNode.style.setProperty("top", "0");
    modalNode.style.setProperty("left", "0");
    modalNode.style.setProperty("width", "100vw");
    modalNode.style.setProperty("height", "100vh");
    modalNode.style.setProperty("z-index", "50");
    modalNode.onclick = onClose;
    // Append to body
    document.body.appendChild(modalNode);
    setModalNode(modalNode);
  };

  const removeModalNode = () => {
    if (!modalNode) {
      return;
    }
    modalNode.remove();
    setModalNode(undefined);
  };

  useEffect(() => {
    if (open) {
      createModalNode();
    } else {
      removeModalNode();
    }
  }, [open]);

  if (!modalNode) {
    return null;
  }

  if (typeof window === "undefined") {
    return null;
  }

  if (!open) {
    return null;
  }

  return createPortal(<>{children}</>, modalNode);
};

export default Modal;
