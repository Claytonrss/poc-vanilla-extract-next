import { RandomColorBox } from "@/components/RandomColorBox";
import { containerButtons } from "./../app.css";

export default function Home() {
  return (
    <div className={`${containerButtons}`}>
      <RandomColorBox />
    </div>
  );
}
