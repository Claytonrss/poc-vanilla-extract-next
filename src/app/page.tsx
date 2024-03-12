import { themeClass } from "@/styles/theme.css";
import { Btn } from "@/components/Button";
import { RandomColorBox } from "@/components/RandomColorBox";
import { containerButtons } from "./app.css";

export default function Home() {
  return (
    <div>
      <div className={`${containerButtons}`}>
        <Btn color="primary" size="large">
          Primary Button
        </Btn>
        <Btn color="secondary" size="small">
          Secondary Button
        </Btn>
      </div>
    </div>
  );
}
