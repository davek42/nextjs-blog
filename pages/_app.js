
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    console.log("ENTER App.js: pageProps: ", pageProps);
    return <Component {...pageProps} />
}
