---
title: First Setup
description: Wajib di lakukan untuk server baru di install
---

## Update & upgrade

```
apt update && apt upgrade -y
```

## Install Basic

``` js
sudo apt install git curl wget nano unzip sudo -y
```

## Create User
```js copy
adduser user_name
```

```js copy
usermod -aG sudo user_name
usermod -aG www-data user_name
```
```js copy
su - user_name
```