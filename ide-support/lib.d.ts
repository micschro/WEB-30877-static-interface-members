declare module "subpath/module" {

  export interface ICommand {
    /**
     * Execute stuff
     */
    execute()

    /**
     * Whether I can execute stuff
     * @return {boolean}
     */
    canExecute():boolean
  }

  var ICommand:{
    /**
     * Select an item
     * @const
     */
    SELECT_ITEM?:ICommand;

    /**
     * Cut stuff
     */
    CUT?:ICommand;

    /**
     * Copy stuff
     */
    COPY?:ICommand;


  }

}