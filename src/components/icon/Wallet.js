import React from 'react'

const Wallet = ({ className, width, height, color }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26 14.19V10.19L6.10324 10.19C5.35686 10.1924 4.63091 9.99075 3.99999 9.61571V23.9068C4.00373 25.0639 4.94284 26 6.1 26H26V22.01H14.46C14.2001 22.01 13.9503 21.9088 13.7637 21.7278L10.7637 18.8178C10.3588 18.425 10.3588 17.775 10.7637 17.3822L13.7637 14.4722C13.9503 14.2912 14.2001 14.19 14.46 14.19H26ZM26.9973 8.19H24.1062C24.0692 8.12771 24.0338 8.06435 24 8H27.1162C27.7446 8 28.0381 8.56929 27.996 9.1004C27.9987 9.12992 28 9.1598 28 9.19V27C28 27.5523 27.5523 28 27 28H6.10001C3.84079 28 2.00729 26.1724 2 23.91V6.1C2 6.08775 2 6.07562 2.0005 6.06359C1.98873 5.32778 2.18344 4.58948 2.58463 3.9358C3.36414 2.6657 4.79514 1.92362 6.24611 2.00625H27V3.95713C25.8483 3.95713 24.9147 4.87424 24.9147 6.00555C24.9147 6.54739 25.1343 7.06693 25.5249 7.44945C25.9156 7.83196 26.4452 8.04598 26.9968 8.04422L26.9973 8.19ZM23.4118 6.00541C23.4118 5.2741 23.6264 4.58973 24 4.00452L6.25829 4.00324C5.46711 3.96112 4.71601 4.33234 4.30686 4.96771C3.89771 5.60307 3.89771 6.39824 4.30686 7.0336C4.71601 7.66896 5.46711 8.04019 6.31606 7.99653H23.9962C23.6169 7.39915 23.4118 6.7122 23.4118 6.00541ZM27.1154 2C28.2949 2 28.2949 4 27.1154 4L24 3.99973C24.6332 2.80201 25.7914 2 27.1154 2ZM12.8962 18.1L14.8653 20.01H26V16.19H14.8653L12.8962 18.1Z" fill={color}/>
</svg>

  )
}

export default Wallet
