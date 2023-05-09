import { DefaultButton } from '../styles/Button.style';

export default function Button(props) {
    return (
        <DefaultButton>{props.children}</DefaultButton>
    )
}