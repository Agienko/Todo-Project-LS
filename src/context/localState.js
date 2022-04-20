
 const localStore = {
    getUserName(){// дает имя зарегистрированого пользователя
       return this.getState().loginedUser.name
    },
    isLogged() { // проверка на вход в сиситему
        if(!this._isStoreCreated()) this._createStore()
        return !!this.getState().loginedUser.name 
    },
    isUserCereated(userName){ // существует ли пользователь с именем в базе?
        return !!this.getState()[userName]
    },
    setNewUser(userName, password){ // делает проверку и если пользователь уникальный,  добавляет его и , возвращает true, или false(если не добавлено)
        if(this.isUserCereated(userName)){
            alert(` Пользователь с именем "${userName}" существует, пожалуйста выберите другое имя`)
            return false
        }
        let state = this.getState()
        state[userName] = {password: password}
        this.setState(state)
        return true
    },
    loginUser(userName, password){//логин юзера
        let state = this.getState()
        if(state[userName].password === password) {
            state.loginedUser = {name: userName, password: password}
            this.setState(state)
            return true
        } return false
    },
    logoutUser(){//логаут юзера
        let state = this.getState()
        state.loginedUser = {name: '', password: ''}
        this.setState(state)
    },
    getLists(){// Возвращает массив имен списков
        let state = this.getState()
        return Object.keys(state[this.getUserName()]).filter(i => i!== 'password')
    },
    createNewList(){ // создать список
        let state = this.getState()
        let userName = this.getUserName()
        let name = `Новый список`
        for(let i = 1;;i++){//Создает уникальное имя
            if(!state[userName][`Новый список ${i}`]){
                name = `Новый список ${i}`
                break
            }
        }
        state[userName][name] = []
        this.setState(state)
    },
    renameList( lisName, newName){// переименовать список(возвращает true), если имя существует, - возвращает false
        let state = this.getState()
        let userName = this.getUserName()
        if(state[userName].hasOwnProperty(newName) ){
            alert(` Список с именем "${newName}" существует, пожалуйста выберите другое имя`)
            return false
        }
        let list = state[userName][lisName]
        delete state[userName][lisName]
        state[userName][newName] = list
        this.setState(state)
        return true
    },
    deleteList(listName){ // удалить список
        let state = this.getState()
        let userName = this.getUserName()
        delete state[userName][listName]
        this.setState(state)
    },
    getListItems(listName){
        let state = this.getState()
        let userName = this.getUserName()
        return state[userName][listName] || []
    },
    addListItem(listName, text){ // создать задание
        let state = this.getState()
        let userName = this.getUserName()
        let id = Math.max(...state[userName][listName].map(i => +i.id), 0) + 1 // создает уникальнй id 
        let listItem = {// создает обьект задания
            id: id, 
            text: text, 
            date: new Date().toLocaleString(), 
            important: false, 
            urgent: false, 
            completed: false
        }
        state[userName][listName].push(listItem)
        this.setState(state)
    },
    updateListItem(listName, id, prop, value ){ // обновить произвольное свойство(prop) задания
        let state = this.getState()
        let userName = this.getUserName()
        let index = state[userName][listName].map(i => i.id).indexOf(id)
        state[userName][listName][index][prop] = value
        this.setState(state)
    },
    deleteListItem(listName, id){ // удаляет задание
        let state = this.getState()
        let userName = this.getUserName()
        state[userName][listName] = state[userName][listName].filter(i => i.id !== id)
        this.setState(state)
    }
}

localStore.__proto__ = {
    _storeName: '__TODO_APP_STORE__', // глобальная переменная для хранения состояния приложения в localStorage
    _isStoreCreated() { // проверка , создан ли стор
        return !!localStorage.getItem(this._storeName) 
    },
    _createStore() { // создать стор с пустыми значениями логина и пароля
        let state = {loginedUser: { name: '', password: ''}}
        localStorage[this._storeName] = JSON.stringify(state)
    },
    _clearStore() { // очистить стор
        localStorage.clear()
    },
    getState(){ // парсит стэйт из localStorage
        return JSON.parse(localStorage.getItem(this._storeName))
    },
    setState(state){// парсит стэйт в localStorage
        localStorage[this._storeName] = JSON.stringify(state)
    },
}

export default localStore
window.localStore = localStore
