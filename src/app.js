import {ICommand} from 'subpath/module'

ICommand.canExecute() // non-static interface members should not be suggested - this is not correct
const selectItem = ICommand.SELECT_ITEM // This is correct, but: no documentation found!

ICommand.SELECT_ITEM.SELECT_ITEM // <-- this is wrong
