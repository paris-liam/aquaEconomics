export default function Shovel({ className, stroke = '#020202' }) {
    return (
        <svg className={className} width="800px" height="800px"
            viewBox="0 0 24 24"><defs>
                </defs><path fill='none' stroke={stroke} strokeMiterLimit='10'strokeWidth='1.91px' d="M4.24,22.5h0A2.74,2.74,0,0,1,1.5,19.76h0a7.22,7.22,0,0,1,2.11-5.1l3.62-3.61L13,16.77,9.34,20.39A7.22,7.22,0,0,1,4.24,22.5Z" /><line fill='none' stroke={stroke} stroke-miterlimit='10'stroke-width='1.91px' x1="6.27" y1="17.73" x2="19.64" y2="4.36" /><line fill='none' stroke={stroke} stroke-miterlimit='10'stroke-width='1.91px' x1="16.77" y1="1.5" x2="22.5" y2="7.23" /></svg>
    )
}
