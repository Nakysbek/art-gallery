import create from "zustand";

export const useGallery = create((set, get) => ({
    gallery: [
        {
            id: 1,
            img: 'https://avatars.dzeninfra.ru/get-zen_doc/44972/pub_5a59e08d5816695e0efbe7b9_5a59e4f19b403c1a4920cd7a/scale_1200',
            alt: 'Картинка 1',
            invented: true,
            author: "Cat",
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPCmPFEwB3PxVCyIvHDjxRuIUEtpZzlDf6Q&usqp=CAU',
            alt: 'Картинка 2',
            invented: false,
            author: "Van Gogh",
        },
        {
            id: 3,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
            alt: 'Картинка 3',
            invented: false,
            author: "Mono Lisa",
        },
        {
            id: 4,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8joNSkpXdagMUKpj5k-DFiXeFHaOiQn7mJA&usqp=CAU',
            alt: 'Картинка 4',
            invented: true,
            author: "Dos Santos",
        },
        {
            id: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmGHJELSmjgcKxty4K0uPt0Dxbd_szyBEfw&usqp=CAU',
            alt: 'Картинка 5',
            invented: false,
            author: "Bellini",
        },
        {
            id: 6,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKGOG5iW1IGJVvBBcosQIsowHyxn4oGwbJQ&usqp=CAU',
            alt: 'Картинка 6',
            invented: true,
            author: "Van Gogh",
        },
        {
            id: 7,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnxFnOKRXQDabKnhNRc98S-ZL9hqfcOGZ5A&usqp=CAU',
            alt: 'Картинка 7',
            invented: false,
            author: "Ocean",
        },
        {
            id: 8,
            img: 'https://spb.hse.ru/data/2020/08/29/1578170284/1.%20%D1%84%D0%BE%D1%82%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8.jpg',
            alt: 'Картинка 8',
            invented: false,
            author: "Fine",
        },
        {
            id: 9,
            img: 'https://interesnyefakty.org/wp-content/uploads/Vinsent-van-Gog-2.jpg',
            alt: 'Картинка 9',
            invented: false,
            author: "Van Gogh ",
        },

    ],
    loading: false,
    error: null,

}))



