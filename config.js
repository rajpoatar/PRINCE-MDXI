const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUa4+iSBT9L/VVMyqggkkny1PxSavgYzMfyqoSSqHAokBx4n+fYHfPdDbZ2V4+QXFz7rnnnFs/AEtpTiakAoMfIOO0hILUr6LKCBgAozgeCQdNgKGAYABCwzpYS8uMpIImrgGrjUP9mUAomF1bo0XWkXLN9LpYcsIX8GiCrDjEFP0BEM3gWeOjdmLcw8ks6mi90yyeGarNFsZOuVG0GA77JywzC72AR40IKacstLOIJITDeEIqD1L+NfqXRR/H8+NJabdXtnocS92bmR+cqyFI6Vh3dojOnsfYVJbQ1+i3jG1PHYYtMVy6RTYxJaVC0+BeTfF8tohcGQm3M5q252onfKOf05AR7GLCBBXVl3Wv9NurZ8veYclveWzjyWxvtmH86jgTz4oJk7PTohdu88Dxv0Z8uQkh2xm3ZNG4909yNOrn3m7lKL586PcK76rZFlVwGrT8/DNxj39k5fx/dD9PzKtVrS6v5vDKx3vnQMJeVSytknTdxC7YTWGddZY5cHP+Gv255/sL25Pv47JRwOzCpLZ6TTcbZUNQ5iLzBFeddmvecK1PukNR8D+xdBG89LgxJfuGfoqpMo/tAvXH56vHjC3TcTcJ0VpulEl195RWMOXklN/5mSFnsYQ73vYVJtvD7I73FFmpWKsRrIzXl+dEZ1K5GAw6jybgJKS54FDQlD3P+v0mgLhcEcSJeMoLsJK1RWB1tZ6q+Rv1thtPgjkPhqkZXpMIt/riGObrEq+2uxfQBBlPEclzgkc0FymvZiTPYUhyMPj7exMwchNvxtXt5E4THCnPhc+KLE4h/nD14ydEKC2YWFUMmfUL4WDQ/n1MhKAszGsdCwY5imhJzAiKHAyOMM7JrwkJJxgMBC/Ir601U1wLP1pPZG2534MmSJ6GUAwGQJNkSer2en1Vbg863b/yb9caFmbZN0YEaIL4WaZ2lK7S63e7da1aF9bnTcBgjQXOlIW14O90a3RMBKRxDgbAHJ8s6uWmPR6+KigdDnU71M1QB7/H+8jJmw9xMMWb9H40y04nHKLiMnGUKexMzW4ZYRQfei1Tt6R4oQZPH/4JUjsJG/LFbXnedtpS+Hk6OvvDZDMjFRqRC16MSDQT4/h8IkwqTnNdLc99TnmGAknyW9FUc6zWLLBLi8tive5mEQxSR9df6m6YlBSRz81M5CaT7tJDZyPUpTAR2v42j2mVqavxKKUnJ/J3+6w8paafJA3VD9ZJe7GdjNKRQDQOoyJTpgn21ZGyS+CptxvCjfls9rFB8fvNRZ/Zqo2rP4+UPC+Cdwv+08g34nXe2o/mJ4z3q+Vf1tPYBys5uMzkK9fwzmDTC42IKYnVtTgo2+140yivoa5l69LZgMfjexNkMRTHlCdgACDDPH3mhKdFHWCXHdM/NDN117XD0K0nj2Eu9N9LsaYJyQVMsnp1e31Zk+V2763K42k2gnkEBkBeantZqxNe6Vm2ElB87BjQ68e5muDxE2q7kMR/BwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
