import { useEffect } from "react";
import Image from "next/image";
// import { Brightness4Rounded, Brightness7Rounded } from "@material-ui/icons";

interface ToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Toggle = ({ theme, setTheme }: ToggleProps) => {
  // const [theme, setTheme] = useState("dark");
  let serializableState: string | any;

  if (typeof window !== "undefined") {
    serializableState = localStorage.getItem("theme");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", serializableState);
    setTheme(serializableState);
  }, [serializableState, setTheme]);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <button onClick={switchTheme}>
      {/* {theme === "light" ? <Brightness4Rounded /> : <Brightness7Rounded />} */}

      {theme === "light" ? (
        <Image
          src="/assets/layout/theme.svg"
          alt="light-theme"
          height={16}
          width={16}
        />
      ) : (
        <Image
          src="/assets/layout/theme-dark.svg"
          alt="dark-theme"
          height={16}
          width={16}
        />
      )}
    </button>
  );
};

export default Toggle;
