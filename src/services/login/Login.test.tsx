import { Login } from "./Login";

describe('login',()=>{
    it('Boas vindas teste',()=>{
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        Login()
        expect(window.alert).toHaveBeenCalled()
    })
})