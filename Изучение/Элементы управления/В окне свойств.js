Prop = Action.Properties;
Mat = Prop.NewMaterial('Название');
DM = Prop.NewButton('Название').DropDownMenu;
DM.NewButton('B2').OnClick = function() { alert('D1'); };
DM.NewButton('BASSA2').OnClick = function() { alert('D111'); };
PM = Mat.PopupMenu;
PM.NewButton('B1').OnClick = function() {  };
PM.NewButton('B2').OnClick = function() { alert('B2'); };
Butt = Prop.NewButt('Название');
Action.Continue();