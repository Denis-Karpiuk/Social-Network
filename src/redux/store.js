import messageReducer from "./messageReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import photoReducer from "./photoReducer";
import profileReducer from "./profileReducer";


let store = {

    _state: {
        profilePage: {

            profileInfo: {

            },

            myPosts: {
                textareaValue: '',
                postData: [
                    {
                        id: 1,
                        text: 'Hi! I am learning JS React!',
                        likesCount: 30,
                        img: 'https://sun2.velcom-by-minsk.userapi.com/impf/bnhgaEga48iCx2jgjxszYYk3lpyR6XcSWgOLdQ/zpjtCFzX9j8.jpg?size=2048x1320&quality=96&sign=6dde7d0885c2756266819b3bd3e61b33&type=album'
                    },
                    {
                        id: 2,
                        text: 'I will be a programmer this year!!!',
                        likesCount: 1000,
                        img: 'https://www.ixbt.com/img/x780/n1/news/2019/5/3/chrome-73-mode-sombre-android_large.jpg'
                    },
                    {
                        id: 3,
                        text: 'I will be a programmer this year!!!',
                        likesCount: 10050,
                        img: 'https://www.ixbt.com/img/x780/n1/news/2019/5/3/chrome-73-mode-sombre-android_large.jpg'
                    },
                    {
                        id: 4,
                        text: 'I will be a programmer this year!!!',
                        likesCount: 10,
                        img: 'https://www.ixbt.com/img/x780/n1/news/2019/5/3/chrome-73-mode-sombre-android_large.jpg'
                    }
                ]
            },
        },

        newsPage: {
            textareaValue: '',
            newsTexts: ['This is once news this page!']
        },

        messagesPage: {

            textareaValue: 'send message',

            usersData: [
                { id: 1, name: 'Denis' },
                { id: 2, name: 'Katy' },
                { id: 3, name: 'Ivan' }
            ],

            messagesData:
            {
                id: 1,
                message: ['Hello!', 'How are you?', 'You are the best'],
                answer: ['Hi', 'Best']
            }
        },

        photosPage: {
            count: this._state.photosPage.albums.length,
            albums: ['https://sun9-48.userapi.com/impf/aDmPDZGKyG2WJ9m6xkSuc4DPolRnRbpDBsH-TQ/1VWO1HDO2CU.jpg?size=1280x960&quality=96&sign=c745e8d52fa1cd5d3cd67a71fd5a45ea&type=album', 'https://sun9-5.userapi.com/impf/c849136/v849136754/c399c/6g2jbO_RT4E.jpg?size=1280x960&quality=96&sign=118f2609d5db93ab33edfd3441f733ff&type=album', 'https://sun9-69.userapi.com/impf/c849332/v849332651/46959/-ybylOBpKYI.jpg?size=2560x1707&quality=96&sign=76834e7a562106a9366f4d8dcd94c656&type=album'],
            photos: ['https://sun9-48.userapi.com/impf/aDmPDZGKyG2WJ9m6xkSuc4DPolRnRbpDBsH-TQ/1VWO1HDO2CU.jpg?size=1280x960&quality=96&sign=c745e8d52fa1cd5d3cd67a71fd5a45ea&type=album', 'https://sun9-5.userapi.com/impf/c849136/v849136754/c399c/6g2jbO_RT4E.jpg?size=1280x960&quality=96&sign=118f2609d5db93ab33edfd3441f733ff&type=album', 'https://sun9-69.userapi.com/impf/c849332/v849332651/46959/-ybylOBpKYI.jpg?size=2560x1707&quality=96&sign=76834e7a562106a9366f4d8dcd94c656&type=album', 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album', 'https://sun9-40.userapi.com/impf/c850036/v850036234/ee7f5/6ATuI0UnMm4.jpg?size=1280x783&quality=96&sign=70581070a045f737ca32caff2fdf0d0b&type=album', 'https://sun9-5.userapi.com/impf/c846522/v846522839/de422/DAvyJH5Jz6M.jpg?size=2560x1707&quality=96&sign=2e9826f91e6ff89b32e37a712acb26bb&type=album']
        },

        musicPage: {
            textareaValue: 'Hello',
            songs: ['Music off my life']
        },

        navbar: {
            navbarBlock: [
                {
                    name: "Моя Страница",
                    link: '/profile',
                    img: 'https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png'
                },
                {
                    name: "Новости",
                    link: '/news',
                    img: 'https://e7.pngegg.com/pngimages/917/849/png-clipart-computer-icons-news-media-newspaper-press-release-veille-juridique-text-logo.png'
                },
                {
                    name: "Сообщения",
                    link: '/messages',
                    img: 'https://library.kissclipart.com/20181213/fce/kissclipart-message-logo-png-clipart-computer-icons-clip-art-2ce7c3ec0ae1623d.jpg'
                },
                {
                    name: "Фотографии",
                    link: '/photos',
                    img: 'https://img2.freepng.ru/20180426/pfw/kisspng-computer-icons-camera-photography-5ae221306ada91.9319799815247690724377.jpg'
                },
                {
                    name: "Музыка",
                    link: '/music',
                    img: 'https://www.clipartmax.com/png/middle/290-2909910_music-blog-list-logo-music-logo-png-hd.png'
                },
                {
                    name: "Видео",
                    link: '/video',
                    img: 'https://w7.pngwing.com/pngs/639/88/png-transparent-documentary-film-computer-icons-cinema-video-icon-miscellaneous-angle-text.png'
                },
                // {
                //     name: "Друзья",
                //     link: '/friends',
                //     img: 'https://img1.pnghut.com/5/13/8/DUEbm10kQ4/logo-love-black-friendship-symbol.jpg'
                //  }
            ],
            navFriends:
            {
                name: 'Друзья',
                link: "/friends2",
                friends: [
                    {
                        name: 'Evgeniy',
                        avatar: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/cNMLAJP7xC347e53DZGA4OkP9XuAlkXOGiNZW6QsJE0uh4SaFahf434JgOsDUfGQ1AXp8j6cYTKn3nxOBPxiCkCH.jpg?size=200x0&quality=96&crop=0,540,1620,1620&ava=1',
                        link: "/friends01"
                    },
                    {
                        name: 'Evgeniy',
                        avatar: 'https://sun9-32.userapi.com/impf/c841223/v841223028/15c7c/C8-TbtEBfmo.jpg?size=1536x2048&quality=96&sign=0e2609f70749f508a9b8abf0096cf031&type=album',
                        link: "/friends02"
                    },
                    {
                        name: 'July',
                        avatar: 'https://sun1.velcom-by-minsk.userapi.com/s/v1/if1/OGB0bI0uymSdYN6wu844fMU6cmB__iKjJ5qi8zdiFzm5WMlgzVd2cg0-cifzAMBNUeVBrWnJ.jpg?size=200x0&quality=96&crop=856,182,1086,1521&ava=1',
                        link: "/friends03"
                    }
                ]
            }
        }
    },

    // УВЕДОМИТЬ ПОДПИСЧИКА=ВЫЗВАТЬ ПОДПИСЧИКА(В ЭТОМ СЛУЧАЕ ПОДИСЧИК ТОЛЬКО ОДИН),
    // КТО БУДЕТ ПОДПИСЧИКОМ МЫ НЕ ЗНАЕМ,
    //STORE НИЧЕГО НЕ ПЕРЕРИСОВЫВАЕТ, ОН ПРОСТО УВЕОДОМЛЯЕТ ПОДПИСЧИКА(НАБЛЮДАТЕЛЯ) ИЗ ВНЕ, О ТОМ ЧТО, ЧТО ТО ИЗМЕНИЛОСЬ
    _callSubscriber() {
        console.log('not subscrinvers')
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._state.musicPage = musicReducer(this._state.musicPage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.photosPage = photoReducer(this._state.photosPage, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {   //ПОДПИСЫВАЕМ ПОДПИСЧИКА
        this._callSubscriber = observer;
    }
}



export default store;

window.store = store; //даёт возможность просматривать содержимое через консоль