import Button from "./ui/button";

const Navbar = () => {
  return (
    <nav className=" z-30 w-full text-white container px-4 mx-auto fixed left-0 right-0">
      <div className="flex justify-center items-center relative h-20">
        <p className="absolute left-0">Menu</p>
        <p>Hunters Run</p>
        <Button light className="absolute right-0" small>
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
