import React from "react";
import './index.css'

// 全局底部栏组件
  export default function GlobalFooter ()  {
    const Current = new Date().getFullYear()
    
    return (
            <div
              className="global-footer"
            >
              <div>© {Current} 面试刷题平台</div>
              <div>
                <a href="https://www.code-nav.cn" target="_blank">
                  作者：编程导航 - 程序员鱼皮
                </a>
              </div>
            </div>
    );
  };