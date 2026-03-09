import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { tagStyles } from './TagStyle'
interface TagProps {
    imageSrc: ImageSourcePropType;
    label: string;
}
const { container, image, imageWrapper, text } = tagStyles
export default function Tag({ imageSrc, label }: TagProps) {
    return (
        <View style={ container }>
            <View style={ imageWrapper }><Image style={ image } source={ imageSrc } /></View>
            <Text style={ text }>{ label }</Text>
        </View>
    )
}
