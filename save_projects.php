<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Fichier où seront stockés les projets
$dataFile = 'projects.json';

// Créer le fichier s'il n'existe pas
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, json_encode([]));
}

// Gérer les requêtes OPTIONS (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Fonction pour lire les projets
function readProjects() {
    global $dataFile;
    
    if (!file_exists($dataFile)) {
        // Créer le fichier avec un tableau vide s'il n'existe pas
        file_put_contents($dataFile, json_encode([]));
        return [];
    }
    
    $content = file_get_contents($dataFile);
    $projects = json_decode($content, true);
    
    return json_last_error() === JSON_ERROR_NONE ? $projects : [];
}

// Fonction pour sauvegarder les projets
function saveProjects($projects) {
    global $dataFile;
    
    $result = file_put_contents($dataFile, json_encode($projects, JSON_PRETTY_PRINT));
    return $result !== false;
}

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Récupérer les projets
        $projects = readProjects();
        echo json_encode($projects);
        
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Sauvegarder les projets
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if (json_last_error() === JSON_ERROR_NONE) {
            if (saveProjects($data)) {
                echo json_encode(['success' => true, 'message' => 'Projects saved successfully']);
            } else {
                echo json_encode(['success' => false, 'error' => 'Failed to save projects']);
            }
        } else {
            echo json_encode(['success' => false, 'error' => 'Invalid JSON data']);
        }
        
    } else {
        http_response_code(405);
        echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server error: ' . $e->getMessage()]);
}
?>