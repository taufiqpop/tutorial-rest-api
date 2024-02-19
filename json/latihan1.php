<?php
// JSON ENCODE
$mahasiswa = [
    [
        "nama"  => "Taufiq Pop",
        "nim"   => "L200190085",
        "email" => "taufiqpop999@gmail.com"
    ],
    [
        "nama"  => "Lala Dwi Alfiyah",
        "nim"   => "L100190174",
        "email" => "lalapo19@gmail.com"
    ]
];

// JSON DECODE
$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
