const tg = window.Telegram.WebApp;

export function useTelegram() {
  
    const onCLose = () => {
        tg.close()
      }
      const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide()
        }else {
            tg.MainButton.show()
        }
      }
    return{
        onCLose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}