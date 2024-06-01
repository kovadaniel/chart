import { FC, MouseEvent, useState } from "react";
import { NavbarProps } from "./Navbar.types";
import classes from "./Navbar.module.scss";
import cx from "classnames";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { MoreIcon } from "shared/ui/Icons";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchStatisticById } from "widgets/Chart/model/services/fetchStatisticById";
import { useSelector } from "react-redux";
import { getStatisticData } from "widgets/Chart";

const options = [
  {id: 1, name: 'OS Doors'},
  {id: 2, name: 'OS Bombuntu'},
  {id: 3, name: 'Mibre Office'},
  {id: 4, name: 'LoWtEx'},
  {id: 5, name: 'W$ POS'},
];

const Navbar: FC<NavbarProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { data } = useSelector(getStatisticData);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null); 
  };

  const handleClickOption = (id: number) => {
    dispatch(fetchStatisticById(`${id}`));
    handleClose();
  }

  return (
    <div className={cx(className, classes.header)}>
      <div className={classes.header__title}>
        {`Количество пройденных тестов "${data?.title ?? ""}"`}
      </div>
      
      <div>
        <IconButton
          aria-label="more"
          onClick={handleClick}
        >
          <MoreIcon height="14px" width="14px"/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ width: 230 }}
        >
          {options.map((option) => (
            <MenuItem key={option.id} onClick={() => handleClickOption(option.id)}>
              <Typography variant="inherit" noWrap>
                {option.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
