function Router(){
    this.routers = {};
    this.curUrl='';

    this.route = function(path,callback){
        this.routers[path]=callback || function(){}
    }
    this.refresh=function(){
        this.curUrl=location.hash.slice(1) || '/';
        var fn = this.routers[this.curUrl];
        fn && fn();
        !fn && (console.log('404'));
    }
    this.init=function(){
        window.addEventListener('load',this.refresh.bind(this),false);
        window.addEventListener('hashchange',this.refresh.bind(this),false);
    }
}

var R = new Router();
R.init();
var res = document.getElementById('result');
R.route('/',function(){
    res.style.background='#ccc';
    res.innerHTML='这是首页'
})
R.route('/product',function(){
    res.style.background='red';
    res.innerHTML='这是产品页'
})
R.route('/server',function(){
    res.style.background='yellow';
    res.innerHTML='这是服务页';
})