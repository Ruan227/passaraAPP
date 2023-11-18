import { TouchableOpacity, Image } from "react-native"
import LOGO from "C:\Users\Ruan Pascoal\Desktop\PASSARO\passaraAPP\src\assets\images\logo.png"
import PLAY from "C:\Users\Ruan Pascoal\Desktop\PASSARO\passaraAPP\src\assets\images\play.png"
import { styles } from "./styles"

interface StartProps {
    handleOnStartGame: () => void;
}

const Start: React.FC<StartProps> = ({ handleOnStartGame }) => {
    return (
    <>
    <Image source={require("C:\Users\Ruan Pascoal\Desktop\PASSARO\passaraAPP\src\assets\images\logo.png")} style={styles.container} />
    <TouchableOpacity onPress={handleOnStartGame}>
      <Image source={require("C:\Users\Ruan Pascoal\Desktop\PASSARO\passaraAPP\src\assets\images\play.png")} />
    </TouchableOpacity>
  </>
  );
};
export { Start };