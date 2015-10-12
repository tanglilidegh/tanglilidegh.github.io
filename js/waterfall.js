/**
 * Created by tll on 2015/10/8.
 */
window.onload=function(){
    waterfall('main','box');
    window.onscroll=function(){
        if(checkScrollSlide()){
            var oParent=document.getElementById('main');
            //�����ݿ���Ⱦ����ҳ���β��
            //for(var i=0;i<dataInt.data.length;i++){
                for(var i=24;i<77;i++){
                var oBox=document.createElement('div');
                oBox.className='box';
                oParent.appendChild(oBox);

                var oPic=document.createElement('div');
                oPic.className='pic';
                oBox.appendChild(oPic);

                var oImg=document.createElement('img');
                oImg.src="http://7xnglp.com1.z0.glb.clouddn.com/1("+i+").jpg?imageMogr2/thumbnail/380x";
                oPic.appendChild(oImg);
            }
            waterfall('main','box');
        }
    }
}

function waterfall(parent,box){
    //��main�µ����е�classΪbox��Ԫ��ȡ����
    var oParent=document.getElementById(parent);
    var oBoxs=getByClass(oParent,box);
    //��������ҳ����ʾ��������ҳ���/box�Ŀ�)
    var oBoxw=oBoxs[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxw);
    //����main�Ŀ�
    oParent.style.cssText='width:'+oBoxw*cols+'px;margin:0 auto';
    //���ÿһ�и߶ȵ�����
    var hArr=[];
    for(var i=0;i<oBoxs.length;i++){
        if(i<cols){
            hArr.push(oBoxs[i].offsetHeight);
        }else{
            var minH=Math.min.apply(null,hArr);
            var index=getMinhIndex(hArr,minH);
            oBoxs[i].style.position='absolute';
            oBoxs[i].style.top=minH+'px';
            //oBoxs[i].style.left=oBoxs*index+'px';
            oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
            hArr[index]+=oBoxs[i].offsetHeight;
        }
    }
    //console.log(hArr);


}

//����class��ȡԪ��
function getByClass(parent,clsName){
    var boxArr=new Array(),    //�����洢��ȡ��������classΪbox��Ԫ��
        oElements=parent.getElementsByTagName("*");
    for(var i=0;i<oElements.length;i++){
        if(oElements[i].className==clsName){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}

function getMinhIndex(arr,val){
    for(var i in arr){
        if(arr[i]==val){
            return i;
        }
    }
}

//����Ƿ�߱��˹������������ݿ������
function checkScrollSlide(){
    var oParent=document.getElementById('main');
    var oBoxs=getByClass(oParent,'box');
    //���һ��box����������ĸ߶�+���һ��box����ĸ߶�
    var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    //��ǰҳ����ߵľ���
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.body.clientHeight||document.documentElement.clientHeight;
    return (lastBoxH<scrollTop+height)?true:false;
}











