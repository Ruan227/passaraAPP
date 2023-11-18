import { Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import { Game } from './Game';

const Home = () => {
    return (
        <ImageBackground source={require('C:/Users/Ruan Pascoal/Desktop/PASSARO/passaraAPP/src/assets/images/background.png')} style={styles.container}>
            <Game />""
        </ImageBackground>
    );
};

export { Home };
