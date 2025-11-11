type IconProps = React.HTMLAttributes<SVGElement>

import { IoToggleOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
export const Icons = {
    toggleOff: (props: IconProps) => <IoToggleOutline {...props} />,
    gear: (props: IconProps) => <GoGear {...props} />,
    mail: (props: IconProps) => <CiMail {...props} />,
    admin : (props: IconProps) => <MdOutlineAdminPanelSettings {...props} />,
    login: (props: IconProps) => <RiLoginCircleLine {...props} />,
    user: (props: IconProps) => <FaRegUser {...props} />,
    logout : (props: IconProps) => <FaPowerOff {...props} />,
    home : (props: IconProps) => <FaHome {...props} />,
}