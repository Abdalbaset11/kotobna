'use client'
import Image from "next/image"

const MobileImages = [
    { id: 1, src: '/assets/images/iphone_02.png', titile: 'Audio Book 01' },
    { id: 2, src: '/assets/images/iphone_02.png', titile: 'Audio Book 02' },
    { id: 3, src: '/assets/images/iphone_02.png', titile: 'Audio Book 03' },
    { id: 4, src: '/assets/images/iphone_02.png', titile: 'Audio Book 04' },
    { id: 5, src: '/assets/images/iphone_02.png', titile: 'Audio Book 05' }
]

export const MobileGallert = () => {
    return (
        <div className="flex gap-10 justify-center align-middle overflow-hidden h-[38rem] max-h-[1600px]">
            {MobileImages.map(({ src, title, id }) => (
                <Image key={id} src={src} alt={title} width={279} height={576} />
            ))}
        </div>
    )
}
