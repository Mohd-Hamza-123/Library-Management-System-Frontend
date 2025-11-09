type IconProps = React.HTMLAttributes<SVGElement>

import { IoToggleOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { CiMail } from "react-icons/ci";

export const Icons = {
    toggleOff: (props: IconProps) => <IoToggleOutline {...props} />,
    gear: (props: IconProps) => <GoGear {...props} />,
    mail: (props: IconProps) => <CiMail {...props} />,
}