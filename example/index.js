const email = document.getElementById('email')

const checkmark = `
<svg class="success" width="25" height="19" viewBox="0 0 25 19" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0153 1.90711L6.94851 18.9739L0.09375 12.1191L1.91101 10.3019L6.94851 15.3394L22.198 0.0898438L24.0153 1.90711Z" fill="black"/>
</svg>
`

const copy = `
<svg class="copy" width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_11345_48908" fill="black">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 1.23076V5.5H1.23077C0.551032 5.5 0 6.05103 0 6.73076V22.7298C0 23.4095 0.551032 23.9605 1.23076 23.9605H17.2316C17.9114 23.9605 18.4624 23.4095 18.4624 22.7298V18.4605H22.7316C23.4114 18.4605 23.9624 17.9095 23.9624 17.2298V1.23077C23.9624 0.551032 23.4114 0 22.7316 0H6.73077C6.05103 0 5.5 0.55103 5.5 1.23076ZM8.07 2.57V15.8905H21.3924V2.57H8.07ZM15.8924 21.3905V18.4605H6.73076C6.05103 18.4605 5.5 17.9095 5.5 17.2298V8.07H2.57V21.3905H15.8924Z"/>
    </mask>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 1.23076V5.5H1.23077C0.551032 5.5 0 6.05103 0 6.73076V22.7298C0 23.4095 0.551032 23.9605 1.23076 23.9605H17.2316C17.9114 23.9605 18.4624 23.4095 18.4624 22.7298V18.4605H22.7316C23.4114 18.4605 23.9624 17.9095 23.9624 17.2298V1.23077C23.9624 0.551032 23.4114 0 22.7316 0H6.73077C6.05103 0 5.5 0.55103 5.5 1.23076ZM8.07 2.57V15.8905H21.3924V2.57H8.07ZM15.8924 21.3905V18.4605H6.73076C6.05103 18.4605 5.5 17.9095 5.5 17.2298V8.07H2.57V21.3905H15.8924Z" fill="black"/>
    <path d="M8.07 2.57V0H5.5V2.57H8.07ZM21.3924 2.57H23.9624V0H21.3924V2.57ZM21.3924 15.8905V18.4605H23.9624V15.8905H21.3924ZM5.5 5.5V8.07H8.07V5.5H5.5ZM18.4624 18.4605V15.8905H15.8924V18.4605H18.4624ZM15.8924 21.3905V23.9605H18.4624V21.3905H15.8924ZM15.8924 18.4605H18.4624V15.8905H15.8924V18.4605ZM2.57 21.3905H0V23.9605H2.57V21.3905ZM2.57 8.07V5.5H0V8.07H2.57ZM5.5 8.07H8.07V5.5H5.5V8.07ZM8.07 15.8905H5.5V18.4605H8.07V15.8905ZM21.3924 0H8.07V5.14H21.3924V0ZM23.9624 15.8905V2.57H18.8224V15.8905H23.9624ZM2.93 1.23076V5.5H8.07V1.23076H2.93ZM6.73077 -2.57C4.63167 -2.57 2.93 -0.86835 2.93 1.23076H8.07C8.07 1.97041 7.4704 2.57 6.73077 2.57V-2.57ZM22.7316 -2.57H6.73077V2.57H22.7316V-2.57ZM26.5324 1.23077C26.5324 -0.868337 24.8308 -2.57 22.7316 -2.57V2.57C21.992 2.57 21.3924 1.9704 21.3924 1.23077H26.5324ZM26.5324 17.2298V1.23077H21.3924V17.2298H26.5324ZM22.7316 21.0305C24.8307 21.0305 26.5324 19.3289 26.5324 17.2298H21.3924C21.3924 16.4901 21.992 15.8905 22.7316 15.8905V21.0305ZM18.4624 21.0305H22.7316V15.8905H18.4624V21.0305ZM21.0324 22.7298V18.4605H15.8924V22.7298H21.0324ZM17.2316 26.5305C19.3307 26.5305 21.0324 24.8289 21.0324 22.7298H15.8924C15.8924 21.9901 16.492 21.3905 17.2316 21.3905V26.5305ZM1.23076 26.5305H17.2316V21.3905H1.23076V26.5305ZM-2.57 22.7298C-2.57 24.8289 -0.868341 26.5305 1.23076 26.5305V21.3905C1.9704 21.3905 2.57 21.9901 2.57 22.7298H-2.57ZM-2.57 6.73076V22.7298H2.57V6.73076H-2.57ZM1.23077 2.93C-0.868332 2.93 -2.57 4.63165 -2.57 6.73076H2.57C2.57 7.47041 1.9704 8.07 1.23077 8.07V2.93ZM5.5 2.93H1.23077V8.07H5.5V2.93ZM18.4624 21.3905V18.4605H13.3224V21.3905H18.4624ZM2.57 23.9605H15.8924V18.8205H2.57V23.9605ZM0 8.07V21.3905H5.14V8.07H0ZM5.5 5.5H2.57V10.64H5.5V5.5ZM2.93 8.07V17.2298H8.07V8.07H2.93ZM2.93 17.2298C2.93 19.3289 4.63166 21.0305 6.73076 21.0305V15.8905C7.47041 15.8905 8.07 16.4901 8.07 17.2298H2.93ZM6.73076 21.0305H15.8924V15.8905H6.73076V21.0305ZM5.5 2.57V15.8905H10.64V2.57H5.5ZM8.07 18.4605H21.3924V13.3205H8.07V18.4605Z" fill="#010100" mask="url(#path-1-inside-1_11345_48908)"/>
</svg>
`

email.addEventListener('click', (ev) => {
    ev.preventDefault()
    copyClipboardApi('erin@erin-s.com')
    const message = document.getElementById('message')
    message.style.display = 'block'
    const icon = email?.querySelector('#icon')
    icon.innerHTML = checkmark
    setTimeout(() => {
        message.style.display = 'none'
        icon.innerHTML = copy
    }, 2000)
})

async function copyClipboardApi (text) {
    // Use the Async Clipboard API when available. Requires a secure browsing
    // context (i.e. HTTPS)
    if (!navigator.clipboard) {
        throw new Error('Not clipboard')
    }

    return navigator.clipboard.writeText(text)
}