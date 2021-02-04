import React from 'react'
import ListFooter from './ListFooter'

const itemFooter = [
    {
        header: 'Special Course',
        menu1: 'Healthy and Muscle',
        menu2: 'Office Food Daily',
        menu3: 'Happy Kids'
    },
    {
        header: 'Company',
        menu1: 'APIs Developer',
        menu2: 'Career',
        menu3: 'Terms & Conditions'
    },
    {
        header: 'Be Our Friend',
        menu1: 'Bekasi, West Java',
        menu2: 'Support@easyrec.co.id',
        menu3: '021 8243 0764'
    },
]

function SectionFooter() {
    return (
        <section class="w-full mt-12 md:mt-24">
            <div class="bg-green-800">
                <div class="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center py-10 md:py-16">
                    <div className="w-1/4 md:pl-6 mb-2 ml-2">
                        <a style={{ width: '50px', height: '50px' }} href="#"><svg width={191} height={50} viewBox="0 0 191 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54.288 37C53.8827 37 53.5307 36.872 53.232 36.616C52.9547 36.36 52.816 36.0507 52.816 35.688V15.88C52.816 15.5173 52.9333 15.2187 53.168 14.984C53.424 14.728 53.7333 14.6 54.096 14.6H62.928C64.1227 14.6 65.2 14.8773 66.16 15.432C67.12 15.9653 67.8773 16.712 68.432 17.672C69.008 18.6107 69.296 19.6987 69.296 20.936C69.296 21.832 69.1253 22.6747 68.784 23.464C68.4427 24.232 67.9733 24.904 67.376 25.48C66.7787 26.0347 66.096 26.4613 65.328 26.76L64.624 26.248C65.3493 26.4187 66 26.728 66.576 27.176C67.152 27.6027 67.6213 28.1573 67.984 28.84C68.3467 29.5013 68.5387 30.28 68.56 31.176C68.6027 31.9653 68.656 32.5947 68.72 33.064C68.784 33.5333 68.88 33.9067 69.008 34.184C69.136 34.44 69.3173 34.6427 69.552 34.792C69.8507 34.984 70.0427 35.24 70.128 35.56C70.2347 35.88 70.1813 36.1893 69.968 36.488C69.84 36.68 69.6587 36.8187 69.424 36.904C69.1893 36.968 68.9547 36.9893 68.72 36.968C68.4853 36.9467 68.2827 36.8827 68.112 36.776C67.7707 36.584 67.44 36.3067 67.12 35.944C66.8 35.56 66.5333 35.016 66.32 34.312C66.1067 33.608 66 32.648 66 31.432C66 30.7493 65.8933 30.184 65.68 29.736C65.4667 29.288 65.1787 28.9253 64.816 28.648C64.4533 28.3707 64.048 28.1787 63.6 28.072C63.152 27.9653 62.6933 27.912 62.224 27.912H55.088L55.472 27.336V35.688C55.472 36.0507 55.3653 36.36 55.152 36.616C54.9387 36.872 54.6507 37 54.288 37ZM55.088 25.608H62.928C63.5467 25.5653 64.1227 25.352 64.656 24.968C65.2107 24.584 65.6587 24.0507 66 23.368C66.3627 22.664 66.544 21.8747 66.544 21C66.544 19.8693 66.1813 18.9307 65.456 18.184C64.752 17.4373 63.856 17.064 62.768 17.064H55.216L55.472 16.456V26.184L55.088 25.608ZM81.3248 37.32C79.6181 37.32 78.1248 36.9573 76.8448 36.232C75.5648 35.5067 74.5728 34.5147 73.8688 33.256C73.1648 31.976 72.8128 30.504 72.8128 28.84C72.8128 26.984 73.1754 25.4053 73.9008 24.104C74.6474 22.7813 75.6074 21.7787 76.7808 21.096C77.9541 20.392 79.2021 20.04 80.5248 20.04C81.5274 20.04 82.4768 20.2213 83.3728 20.584C84.2901 20.9467 85.1008 21.48 85.8048 22.184C86.5301 22.8667 87.1061 23.6987 87.5328 24.68C87.9594 25.64 88.1834 26.7173 88.2048 27.912C88.1834 28.2533 88.0448 28.5413 87.7888 28.776C87.5328 29.0107 87.2341 29.128 86.8928 29.128H74.2528L73.6768 26.92H85.9968L85.4848 27.368V26.664C85.4208 25.7893 85.1328 25.0427 84.6208 24.424C84.1301 23.784 83.5221 23.2933 82.7968 22.952C82.0714 22.6107 81.3141 22.44 80.5248 22.44C79.8848 22.44 79.2448 22.5573 78.6048 22.792C77.9861 23.0053 77.4208 23.368 76.9088 23.88C76.4181 24.3707 76.0234 25.0107 75.7248 25.8C75.4261 26.5893 75.2768 27.5387 75.2768 28.648C75.2768 29.8853 75.5221 30.9733 76.0128 31.912C76.5248 32.8507 77.2288 33.5973 78.1248 34.152C79.0208 34.6853 80.0554 34.952 81.2288 34.952C81.9968 34.952 82.6581 34.856 83.2128 34.664C83.7674 34.472 84.2368 34.2373 84.6208 33.96C85.0261 33.6613 85.3674 33.3627 85.6448 33.064C85.9221 32.872 86.1994 32.776 86.4768 32.776C86.7754 32.776 87.0314 32.8827 87.2448 33.096C87.4581 33.3093 87.5648 33.5653 87.5648 33.864C87.5648 34.2267 87.3941 34.5467 87.0528 34.824C86.4341 35.4853 85.6128 36.072 84.5888 36.584C83.5861 37.0747 82.4981 37.32 81.3248 37.32ZM99.0993 20.04C100.187 20.04 101.169 20.1573 102.043 20.392C102.918 20.6267 103.611 20.9467 104.123 21.352C104.635 21.7573 104.891 22.216 104.891 22.728C104.891 23.0053 104.795 23.272 104.603 23.528C104.433 23.784 104.177 23.912 103.835 23.912C103.558 23.912 103.323 23.8587 103.131 23.752C102.961 23.6453 102.79 23.5067 102.619 23.336C102.47 23.1653 102.257 23.016 101.979 22.888C101.723 22.7387 101.35 22.6213 100.859 22.536C100.369 22.4507 99.8673 22.408 99.3553 22.408C98.2033 22.408 97.1793 22.6853 96.2833 23.24C95.3873 23.7947 94.6833 24.5413 94.1713 25.48C93.6806 26.4187 93.4353 27.4853 93.4353 28.68C93.4353 29.8747 93.6806 30.9413 94.1713 31.88C94.6619 32.8187 95.3446 33.5653 96.2193 34.12C97.0939 34.6747 98.1073 34.952 99.2593 34.952C100.006 34.952 100.593 34.888 101.019 34.76C101.467 34.632 101.851 34.4827 102.171 34.312C102.534 34.0987 102.811 33.8853 103.003 33.672C103.217 33.4587 103.505 33.352 103.867 33.352C104.23 33.352 104.507 33.4693 104.699 33.704C104.891 33.9387 104.987 34.2267 104.987 34.568C104.987 34.952 104.721 35.3573 104.187 35.784C103.654 36.2107 102.929 36.5733 102.011 36.872C101.115 37.1707 100.102 37.32 98.9713 37.32C97.3499 37.32 95.9313 36.9467 94.7153 36.2C93.4993 35.432 92.5499 34.3973 91.8673 33.096C91.2059 31.7733 90.8753 30.3013 90.8753 28.68C90.8753 27.0587 91.2166 25.5973 91.8993 24.296C92.6033 22.9947 93.5739 21.96 94.8113 21.192C96.0486 20.424 97.4779 20.04 99.0993 20.04ZM110.801 35.688C110.801 36.0507 110.673 36.36 110.417 36.616C110.182 36.872 109.883 37 109.521 37C109.137 37 108.827 36.872 108.593 36.616C108.358 36.36 108.241 36.0507 108.241 35.688V21.48C108.241 21.1173 108.358 20.8187 108.593 20.584C108.849 20.328 109.158 20.2 109.521 20.2C109.883 20.2 110.182 20.328 110.417 20.584C110.673 20.8187 110.801 21.1173 110.801 21.48V35.688ZM109.521 18.056C108.987 18.056 108.593 17.9493 108.337 17.736C108.081 17.5227 107.953 17.192 107.953 16.744V16.296C107.953 15.848 108.091 15.5173 108.369 15.304C108.646 15.0907 109.041 14.984 109.553 14.984C110.065 14.984 110.449 15.0907 110.705 15.304C110.961 15.5173 111.089 15.848 111.089 16.296V16.744C111.089 17.192 110.95 17.5227 110.673 17.736C110.417 17.9493 110.033 18.056 109.521 18.056ZM123.559 20.2C125.01 20.2 126.311 20.5627 127.463 21.288C128.615 22.0133 129.522 23.016 130.183 24.296C130.866 25.576 131.207 27.048 131.207 28.712C131.207 30.3547 130.866 31.8267 130.183 33.128C129.522 34.408 128.615 35.4213 127.463 36.168C126.333 36.8933 125.053 37.256 123.623 37.256C122.834 37.256 122.087 37.1387 121.383 36.904C120.701 36.648 120.071 36.328 119.495 35.944C118.941 35.5387 118.471 35.0907 118.087 34.6C117.703 34.088 117.426 33.5867 117.255 33.096L117.959 32.648V42.088C117.959 42.4507 117.842 42.76 117.607 43.016C117.373 43.272 117.063 43.4 116.679 43.4C116.317 43.4 116.007 43.272 115.751 43.016C115.517 42.7813 115.399 42.472 115.399 42.088V21.64C115.399 21.2773 115.517 20.9787 115.751 20.744C116.007 20.488 116.317 20.36 116.679 20.36C117.063 20.36 117.373 20.488 117.607 20.744C117.842 20.9787 117.959 21.2773 117.959 21.64V24.488L117.479 24.232C117.629 23.6987 117.885 23.1867 118.247 22.696C118.631 22.2053 119.09 21.7787 119.623 21.416C120.178 21.032 120.786 20.7333 121.447 20.52C122.13 20.3067 122.834 20.2 123.559 20.2ZM123.271 22.568C122.205 22.568 121.255 22.8347 120.423 23.368C119.613 23.9013 118.973 24.6267 118.503 25.544C118.055 26.4613 117.831 27.5173 117.831 28.712C117.831 29.8853 118.055 30.9413 118.503 31.88C118.973 32.8187 119.613 33.5547 120.423 34.088C121.255 34.6213 122.205 34.888 123.271 34.888C124.338 34.888 125.277 34.6213 126.087 34.088C126.898 33.5547 127.538 32.8187 128.007 31.88C128.477 30.9413 128.711 29.8853 128.711 28.712C128.711 27.5173 128.477 26.4613 128.007 25.544C127.538 24.6267 126.898 23.9013 126.087 23.368C125.277 22.8347 124.338 22.568 123.271 22.568ZM142.387 37.32C140.681 37.32 139.187 36.9573 137.907 36.232C136.627 35.5067 135.635 34.5147 134.931 33.256C134.227 31.976 133.875 30.504 133.875 28.84C133.875 26.984 134.238 25.4053 134.963 24.104C135.71 22.7813 136.67 21.7787 137.843 21.096C139.017 20.392 140.265 20.04 141.587 20.04C142.59 20.04 143.539 20.2213 144.435 20.584C145.353 20.9467 146.163 21.48 146.867 22.184C147.593 22.8667 148.169 23.6987 148.595 24.68C149.022 25.64 149.246 26.7173 149.267 27.912C149.246 28.2533 149.107 28.5413 148.851 28.776C148.595 29.0107 148.297 29.128 147.955 29.128H135.315L134.739 26.92H147.059L146.547 27.368V26.664C146.483 25.7893 146.195 25.0427 145.683 24.424C145.193 23.784 144.585 23.2933 143.859 22.952C143.134 22.6107 142.377 22.44 141.587 22.44C140.947 22.44 140.307 22.5573 139.667 22.792C139.049 23.0053 138.483 23.368 137.971 23.88C137.481 24.3707 137.086 25.0107 136.787 25.8C136.489 26.5893 136.339 27.5387 136.339 28.648C136.339 29.8853 136.585 30.9733 137.075 31.912C137.587 32.8507 138.291 33.5973 139.187 34.152C140.083 34.6853 141.118 34.952 142.291 34.952C143.059 34.952 143.721 34.856 144.275 34.664C144.83 34.472 145.299 34.2373 145.683 33.96C146.089 33.6613 146.43 33.3627 146.707 33.064C146.985 32.872 147.262 32.776 147.539 32.776C147.838 32.776 148.094 32.8827 148.307 33.096C148.521 33.3093 148.627 33.5653 148.627 33.864C148.627 34.2267 148.457 34.5467 148.115 34.824C147.497 35.4853 146.675 36.072 145.651 36.584C144.649 37.0747 143.561 37.32 142.387 37.32ZM152.646 20.264C153.051 20.264 153.392 20.4453 153.67 20.808L164.806 35.016C164.976 35.2507 165.062 35.5067 165.062 35.784C165.062 36.1467 164.934 36.456 164.678 36.712C164.422 36.968 164.123 37.096 163.782 37.096C163.376 37.096 163.024 36.904 162.726 36.52L151.59 22.344C151.419 22.1093 151.334 21.8533 151.334 21.576C151.334 21.192 151.462 20.8827 151.718 20.648C151.995 20.392 152.304 20.264 152.646 20.264ZM152.646 37.064C152.368 37.064 152.091 36.9573 151.814 36.744C151.536 36.5307 151.398 36.2533 151.398 35.912C151.398 35.6347 151.504 35.368 151.718 35.112L156.966 28.488L158.31 30.6L153.67 36.552C153.414 36.8933 153.072 37.064 152.646 37.064ZM163.782 20.264C164.144 20.264 164.432 20.3813 164.646 20.616C164.88 20.8507 164.998 21.1173 164.998 21.416C164.998 21.544 164.966 21.6827 164.902 21.832C164.859 21.9813 164.784 22.12 164.678 22.248L159.462 28.936L158.118 26.984L162.726 20.84C163.024 20.456 163.376 20.264 163.782 20.264ZM176.497 20.2C177.947 20.2 179.249 20.5627 180.401 21.288C181.553 22.0133 182.459 23.016 183.121 24.296C183.803 25.576 184.145 27.048 184.145 28.712C184.145 30.3547 183.803 31.8267 183.121 33.128C182.459 34.408 181.553 35.4213 180.401 36.168C179.27 36.8933 177.99 37.256 176.561 37.256C175.771 37.256 175.025 37.1387 174.321 36.904C173.638 36.648 173.009 36.328 172.433 35.944C171.878 35.5387 171.409 35.0907 171.025 34.6C170.641 34.088 170.363 33.5867 170.193 33.096L170.897 32.648V42.088C170.897 42.4507 170.779 42.76 170.545 43.016C170.31 43.272 170.001 43.4 169.617 43.4C169.254 43.4 168.945 43.272 168.689 43.016C168.454 42.7813 168.337 42.472 168.337 42.088V21.64C168.337 21.2773 168.454 20.9787 168.689 20.744C168.945 20.488 169.254 20.36 169.617 20.36C170.001 20.36 170.31 20.488 170.545 20.744C170.779 20.9787 170.897 21.2773 170.897 21.64V24.488L170.417 24.232C170.566 23.6987 170.822 23.1867 171.185 22.696C171.569 22.2053 172.027 21.7787 172.561 21.416C173.115 21.032 173.723 20.7333 174.385 20.52C175.067 20.3067 175.771 20.2 176.497 20.2ZM176.209 22.568C175.142 22.568 174.193 22.8347 173.361 23.368C172.55 23.9013 171.91 24.6267 171.441 25.544C170.993 26.4613 170.769 27.5173 170.769 28.712C170.769 29.8853 170.993 30.9413 171.441 31.88C171.91 32.8187 172.55 33.5547 173.361 34.088C174.193 34.6213 175.142 34.888 176.209 34.888C177.275 34.888 178.214 34.6213 179.025 34.088C179.835 33.5547 180.475 32.8187 180.945 31.88C181.414 30.9413 181.649 29.8853 181.649 28.712C181.649 27.5173 181.414 26.4613 180.945 25.544C180.475 24.6267 179.835 23.9013 179.025 23.368C178.214 22.8347 177.275 22.568 176.209 22.568ZM188.605 36.968C188.157 36.968 187.805 36.84 187.549 36.584C187.314 36.328 187.197 35.976 187.197 35.528V34.888C187.197 34.4187 187.314 34.056 187.549 33.8C187.805 33.544 188.157 33.416 188.605 33.416H188.861C189.33 33.416 189.682 33.544 189.917 33.8C190.151 34.056 190.269 34.4187 190.269 34.888V35.528C190.269 35.976 190.151 36.328 189.917 36.584C189.682 36.84 189.33 36.968 188.861 36.968H188.605Z" fill="white" />
                            <g clipPath="url(#clip0)">
                                <path d="M42.7841 0H8.96299C6.49785 0 4.49219 2.00566 4.49219 4.4709V45.5291C4.49219 47.9943 6.49785 50 8.96299 50H42.7841C44.2859 50 45.5078 48.7781 45.5078 47.2763V2.72373C45.5078 1.22188 44.2859 0 42.7841 0V0ZM6.44531 45.5291C6.44531 44.1408 7.57471 43.0113 8.96299 43.0113H39.6482V48.0469H8.96299C7.57471 48.0469 6.44531 46.9175 6.44531 45.5291V45.5291ZM43.5547 47.2763C43.5547 47.7012 43.209 48.0469 42.7841 48.0469H41.6014V43.0114H42.7841C43.0516 43.0114 43.3103 42.9727 43.5547 42.9005V47.2763ZM43.5547 40.2877C43.5547 40.7126 43.209 41.0583 42.7841 41.0583H10.3517V25.8999C10.3517 25.3605 9.91445 24.9233 9.3751 24.9233C8.83574 24.9233 8.39854 25.3605 8.39854 25.8999V41.0943C7.68096 41.1852 7.01572 41.4461 6.44531 41.8362V4.4709C6.44531 3.27666 7.28125 2.27471 8.39854 2.01768V17.1107C8.39854 17.6501 8.83574 18.0873 9.3751 18.0873C9.91445 18.0873 10.3517 17.6501 10.3517 17.1107V1.95312H42.7841C43.209 1.95312 43.5547 2.29883 43.5547 2.72373V40.2877Z" fill="white" />
                                <path d="M33.878 10.5327C33.1397 10.5327 32.4139 10.6731 31.7366 10.9438C30.6758 9.37343 28.8906 8.40195 26.9532 8.40195C25.0159 8.40195 23.2307 9.37343 22.1698 10.9438C21.4926 10.6732 20.7668 10.5327 20.0285 10.5327C16.8466 10.5327 14.2579 13.1214 14.2579 16.3033C14.2579 18.7482 15.7566 20.8688 17.9866 21.7034V33.1C17.9866 33.9321 18.6637 34.6093 19.4958 34.6093H34.4107C35.2428 34.6093 35.9198 33.9322 35.9198 33.1V21.7035C38.1498 20.8689 39.6485 18.7482 39.6485 16.3034C39.6485 13.1215 37.0599 10.5327 33.878 10.5327V10.5327ZM19.9398 32.6562V30.7029H33.9667V32.6562H19.9398ZM34.7272 20.0261C34.2823 20.1269 33.9667 20.5224 33.9667 20.9784V28.7498H19.9398V20.9784C19.9398 20.5224 19.6241 20.1269 19.1793 20.0261C17.4317 19.6295 16.2111 18.0986 16.2111 16.3034C16.2111 14.1984 17.9236 12.4859 20.0285 12.4859C20.7454 12.4859 21.4442 12.6858 22.049 13.0641C22.289 13.2143 22.5824 13.2528 22.8533 13.1697C23.124 13.0866 23.3454 12.89 23.4599 12.631C24.0711 11.2485 25.4423 10.3552 26.9531 10.3552C28.464 10.3552 29.8352 11.2484 30.4464 12.631C30.561 12.89 30.7823 13.0866 31.053 13.1697C31.3238 13.2529 31.6172 13.2143 31.8573 13.0641C32.4622 12.6858 33.1609 12.4859 33.8779 12.4859C35.9827 12.4859 37.6952 14.1984 37.6952 16.3034C37.6953 18.0986 36.4747 19.6295 34.7272 20.0261V20.0261Z" fill="white" />
                                <path d="M9.37512 20.5288C8.83577 20.5288 8.39856 20.9663 8.39856 21.5057C8.39856 22.045 8.83577 22.4822 9.37512 22.4822C9.91448 22.4822 10.3517 22.045 10.3517 21.5057V21.505C10.3517 20.9656 9.91448 20.5288 9.37512 20.5288Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width={50} height={50} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </a>
                    </div>
                    {
                        itemFooter.map((item, index) => (
                            <ListFooter key={index} header={item.header} menu1={item.menu1} menu2={item.menu2} menu3={item.menu3} />
                        ))
                    }
                    

                </div>
            </div>
            <div class="flex justify-center items-center py-7">
                <hr/>
                <p class="text-sm text-gray-400 text-center">All Rights Reserved Recipexp. by Adit Hernowo 2020</p>
            </div>
        </section>

    )
}

export default SectionFooter
