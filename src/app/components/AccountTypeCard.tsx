import { ReactNode } from "react";
import { Card, CardContent } from "../ui/Card";
import { IconContext } from "react-icons";

interface Props {
  title: string;
  text: string;
  icon: ReactNode;
  handleAccountType: (type: string) => void;
  currentState: string;
}

export default function AccountTypeCard(props: Props) {
  return (
    <IconContext.Provider value={{ size: "3rem", className: "self-center" }}>
      <Card
        onClick={() => props.handleAccountType(props.title)}
        className={
          props.currentState === props.title
            ? "border-green-500 hover:cursor-pointer w-[300px] transtion-all ease-in-out duration-300 hover:bg-gray-300 border-2 text-center flex flex-col gap-[1rem] items-center place-content-center p-4"
            : "hover:cursor-pointer w-[300px] transtion-all ease-in-out duration-300 hover:bg-gray-300 border-2 border-gray-600 text-center flex flex-col gap-[1rem] items-center place-content-center p-4"
        }
      >
        <CardContent className="flex flex-col gap-[1rem]">
          <h1>{props.title}</h1>
          <p className="text-sm text-gray-500">{props.text}</p>
          <>{props.icon}</>
        </CardContent>
      </Card>
    </IconContext.Provider>
  );
}
