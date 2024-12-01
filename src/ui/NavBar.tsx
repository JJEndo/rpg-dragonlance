import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export const NavBar = ({ startBattle }: { startBattle: () => void }) => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">DragonLance</p>
      </NavbarBrand>

      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Button
            onClick={startBattle}
            className="w-full text-blue-300 hover:text-blue-500 px-4 py-2 rounded"
            color="secondary"
          >
            Empezar Batalla
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
