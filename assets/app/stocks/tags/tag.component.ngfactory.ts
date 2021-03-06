/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './tag.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './tag.component';
import * as i3 from '../stock.service';
const styles_TagComponent:any[] = [i0.styles];
export const RenderType_TagComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,styles:styles_TagComponent,
    data:{}});
export function View_TagComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),15,'div',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          12,'div',[['class','col-md-10 col-sm-10 col-xs-10 box']],[[8,'hidden',0]],
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),6,'div',[['id',
          'head']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'h2',[['id','code']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',' - ',''])),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),0,'a',[['class','close-thik']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.TagComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.deleteStock()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),
          ['\n']))],(null as any),(_ck,_v) => {
    var _co:i2.TagComponent = _v.component;
    const currVal_0:boolean = !_co.stock;
    _ck(_v,2,0,currVal_0);
    const currVal_1:any = ((_co.stock == null)? (null as any): _co.stock.name);
    const currVal_2:any = ((_co.stock == null)? (null as any): _co.stock.today);
    _ck(_v,7,0,currVal_1,currVal_2);
    const currVal_3:any = ((_co.stock == null)? (null as any): _co.stock.desc);
    _ck(_v,13,0,currVal_3);
  });
}
export function View_TagComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-tag',([] as any[]),
      (null as any),(null as any),(null as any),View_TagComponent_0,RenderType_TagComponent)),
      i1.ɵdid(49152,(null as any),0,i2.TagComponent,[i3.StockService],(null as any),
          (null as any))],(null as any),(null as any));
}
export const TagComponentNgFactory:i1.ComponentFactory<i2.TagComponent> = i1.ɵccf('app-tag',
    i2.TagComponent,View_TagComponent_Host_0,{stock:'stock'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbmd0aG8vRG9jdW1lbnRzL0phdmFTY3JpcHQvU3RvY2tfYXBwL2Fzc2V0cy9hcHAvc3RvY2tzL3RhZ3MvdGFnLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9uZ3Roby9Eb2N1bWVudHMvSmF2YVNjcmlwdC9TdG9ja19hcHAvYXNzZXRzL2FwcC9zdG9ja3MvdGFncy90YWcuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvbmd0aG8vRG9jdW1lbnRzL0phdmFTY3JpcHQvU3RvY2tfYXBwL2Fzc2V0cy9hcHAvc3RvY2tzL3RhZ3MvdGFnLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvbmd0aG8vRG9jdW1lbnRzL0phdmFTY3JpcHQvU3RvY2tfYXBwL2Fzc2V0cy9hcHAvc3RvY2tzL3RhZ3MvdGFnLmNvbXBvbmVudC50cy5UYWdDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgPGRpdiBbaGlkZGVuXT1cIiFzdG9ja1wiIGNsYXNzPVwiY29sLW1kLTEwIGNvbC1zbS0xMCBjb2wteHMtMTAgYm94XCI+XHJcbiAgICA8ZGl2IGlkPVwiaGVhZFwiPlxyXG4gICAgICA8aDIgaWQ9XCJjb2RlXCI+e3tzdG9jaz8ubmFtZX19IC0ge3tzdG9jaz8udG9kYXl9fTwvaDI+XHJcbiAgICAgIDxhIChjbGljayk9J2RlbGV0ZVN0b2NrKCknIGNsYXNzPWNsb3NlLXRoaWs+PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3Bhbj57e3N0b2NrPy5kZXNjfX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iLCI8YXBwLXRhZz48L2FwcC10YWc+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQWlCLHlDQUNmO1VBQUE7VUFBQSwwREFBaUU7VUFBQSxhQUMvRDtVQUFBO01BQWUsNkNBQ2I7VUFBQTtVQUFBLDhCQUFjO01BQXVDLDZDQUNyRDtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUc7Y0FBQTtjQUFBO1lBQUE7WUFBSDtVQUFBLGdDQUFnRDtNQUM1QywyQ0FDTjtVQUFBO1VBQUEsZ0JBQU0sd0NBQXNCO1VBQUEsV0FDeEIsdUNBQ0Y7VUFBQTs7SUFQQztJQUFMLFdBQUssU0FBTDtJQUVrQjtJQUFBO0lBQUE7SUFHVjtJQUFBOzs7O29CQ05WO01BQUE7YUFBQTtVQUFBOzs7In0=
