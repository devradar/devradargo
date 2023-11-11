# How to export from devradarv1

```sh
# go to firebase admin panel and create service account.json, save as firebase-config.json
npx -p node-firestore-import-export firestore-export -a firebase-config.json -b backup.json
# check online which user/collection to export e.g. xg1f..
cat backup.json | jq '.__collections__.radars.xg1fPu4FSRhWtqDGK6Vx.__collections__.blips' > anoff.json
```
