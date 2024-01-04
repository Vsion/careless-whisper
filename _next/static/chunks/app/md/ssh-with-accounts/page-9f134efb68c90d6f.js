(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{83788:function(s,n,e){Promise.resolve().then(e.bind(e,39938))},39938:function(s,n,e){"use strict";e.r(n),e.d(n,{default:function(){return l}});var i=e(18038),t=e(81389),r=e(46336),h=e(16752),a=e(78109);function o(s){let n={h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.a)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"github/gitlab同时管理多个ssh key"}),"\n",(0,t.jsx)(n.h3,{children:"生成 ssh key"}),"\n",(0,t.jsx)(h.Z,{language:"bash",style:a.Z,showLineNumbers:!0,children:'\xa5 cd \\.\\Users\\[username]\\.ssh \n\xa5 ssh ssh-keygen -t rsa -C "youremail@yourcompany.com"'}),"\n",(0,t.jsx)(n.h3,{children:"同理生成个人邮箱 ssh key (for github)"}),"\n",(0,t.jsx)(h.Z,{language:"bash",style:a.Z,showLineNumbers:!0,children:'~\\.ssh \n\xa5 ssh-keygen -t rsa -C "youremail@personal.com"\n\nGenerating public/private rsa key pair.\nEnter file in which to save the key (C:\\Users\\[user]/.ssh/id_rsa): id_rsa_test\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in id_rsa_test.\nYour public key has been saved in id_rsa_test.pub.\nThe key fingerprint is:\nSHA256:C155hCQy9TQZme0JcihWJWwKU7EBvgfqywcsD3Glmas youremail@personal.com\nThe key\'s randomart image is:\n+---[RSA 3072]----+\n|  .o*==o**       |\n| .o +==**o.      |\n|  oO.+ ooo..     |\n|..=o.    oo      |\n|oo... . S .      |\n|+o.. . o o       |\n|.=.   . .        |\n|E o.             |\n| o.              |\n+----[SHA256]-----+\n\n ~\\.ssh \n\xa5 ls\nconfig  id_rsa  id_rsa.pub  id_rsa_github  id_rsa_github.pub  known_hosts  id_rsa_test  id_rsa_test.pub\n'}),"\n",(0,t.jsxs)(n.p,{children:["生成 ",(0,t.jsx)(n.strong,{children:"id_rsa_test"}),", ",(0,t.jsx)(n.strong,{children:"id_rsa_test.pub"})," 文件, 首次创建可以不输入名称, 默认为 ",(0,t.jsx)(n.strong,{children:"id_rsa"}),", 之后再创建不输入名称会 ",(0,t.jsx)(n.strong,{children:"覆盖 id_rsa"})]}),"\n",(0,t.jsx)(n.h3,{children:"添加私钥"}),"\n",(0,t.jsx)(h.Z,{language:"bash",style:a.Z,showLineNumbers:!0,children:"\xa5 ssh-add ~/.ssh/id_rsa\n\xa5 ssh-add ~/.ssh/id_rsa_github"}),"\n",(0,t.jsx)(n.h3,{children:"配置文件"}),"\n",(0,t.jsx)(n.p,{children:"在 ~/.ssh 目录下新建一个 config 文件"}),"\n",(0,t.jsx)(h.Z,{language:"bash",style:a.Z,showLineNumbers:!0,children:"\xa5 touch config"}),"\n",(0,t.jsx)(n.p,{children:"输入"}),"\n",(0,t.jsx)(h.Z,{language:"config",style:a.Z,showLineNumbers:!0,children:"# gitlab\nHost gitlab.company.com\n    HostName gitlab.company.com\n    Port 50022\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa\n# github\nHost github.com\n    HostName github.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa_github"}),"\n",(0,t.jsx)(n.h3,{children:"在 github / gitlab 上添加 ssh key"}),"\n",(0,t.jsxs)(n.p,{children:["查看文件内容, 将文本拷贝到 ",(0,t.jsx)("a",{href:"https://github.com/settings/ssh",target:"_blank",children:"github ssh"})]}),"\n",(0,t.jsx)(h.Z,{language:"bash",style:a.Z,showLineNumbers:!0,children:"\xa5 cat id_rsa_github.pub"}),"\n",(0,t.jsx)(n.p,{children:"显示如下, 即为成功"}),"\n",(0,t.jsx)(h.Z,{language:"bash",style:a.Z,showLineNumbers:!0,children:"~\\.ssh \n\xa5 ssh -T git@github.com\nHi Vsion! You've successfully authenticated, but GitHub does not provide shell access.\n\n ~\\.ssh \n\xa5 ssh -T git@gitlabcode.21vianet.com\nWelcome to GitLab, @xxx!"})]})}function c(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...s.components};return n?(0,t.jsx)(n,{...s,children:(0,t.jsx)(o,{...s})}):o(s)}function l(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container md",children:(0,i.jsx)(c,{})})})}}},function(s){s.O(0,[647,120,543,744],function(){return s(s.s=83788)}),_N_E=s.O()}]);