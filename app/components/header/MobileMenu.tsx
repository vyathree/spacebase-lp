import Modal from "@/src/components/Modal";
import CrossIcon from "@/src/icons/CrossIcon";
import Link from "next/link";
import { FunctionComponent } from "react";
import NavigationLink from "./NavigationLink";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: FunctionComponent<Props> = ({ onClose, open }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full h-full bg-gray-500 bg-opacity-90 p-11">
        <div className="flex flex-col gap-5">
          <button onClick={() => onClose()}>
            <CrossIcon />
          </button>
          <Link href="/" className="text-white w-fit">
            logo
          </Link>
          <NavigationLink href="#game-overview">Game Overview</NavigationLink>
          <NavigationLink href="#game-world">Game World</NavigationLink>
          <NavigationLink href="#building-variants">
            Building Variants
          </NavigationLink>
          <NavigationLink href="#economy">Economy</NavigationLink>
          <NavigationLink href="/about">About</NavigationLink>
          <NavigationLink href="/subscribe">Subscribe</NavigationLink>
        </div>
      </div>
    </Modal>
  );
};

export default MobileMenu;
