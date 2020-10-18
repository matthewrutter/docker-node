# Database and collection information
collection="people"
db="peopledb"
username="root"
password="password"
authdb="admin"


# Import stuff
importFileName="data"  #Change this to whatever the import files name is.${importFileName}
importFile="/data/${importFileName}.json"  #Location of input file. Change based on requirements.
importFileType="json"  #The filetype the input file will have.


# Commands to run on system with mongo
mongoimport --username=$username \
            --password=$password \
            --authenticationDatabase=$authdb \
            --db=$db \
            --collection=$collection \
            --type=$importFileType \
            --file=$importFile \
            --jsonArray

