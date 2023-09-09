---
title: Remote
description: Cara Remote Server Dengan Menggunakan SSH
---

# REMOTE SSH

### Generate an SSH Key
keygen

```
ssh-keygen -t rsa -b 4096
```
### Copy the key to a server

```
ssh-copy-id username@ipserver
```

### Test the new key

```
ssh -i ~/.ssh/id_rsa.pub username@ipserver
```

## COPY FILE (SCP)

Berfungsi untuk copy file menggunakan SSH (seperti FTP)


<Callout>

</Callout>

```
  scp file.sql root@192.168.100.2:file/share
```




:::tip[See it in action]
Format
```
scp namafile.extension user@ip_server:path
```
Format Cutom Port
```
scp -p 221 namafile.extension user@ip_server:path
```
:::

[source https://www.ssh.com/academy/ssh/copy-id#generate-an-ssh-key](https://www.ssh.com/academy/ssh/copy-id#generate-an-ssh-key) 
