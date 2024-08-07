package com.max.quizspring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.max.quizspring.model.Application;
import com.max.quizspring.service.ApplicationService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin("*")
public class Applicationcontroller {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    // Updated POST Mapping with Path
    @PostMapping("/add")
    public ResponseEntity<Application> addApplication(@RequestBody Application application) {
        try {
            Application createdApplication = applicationService.addApplication(application);
            return new ResponseEntity<>(createdApplication, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{applicationId}")
    public ResponseEntity<Application> getApplicationById(@PathVariable Long applicationId) {
        Optional<Application> application = applicationService.getApplicationById(applicationId);
        return application.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{applicationId}")
    public ResponseEntity<Application> updateApplication(@PathVariable Long applicationId,
            @RequestBody Application application) {
        if (applicationService.getApplicationById(applicationId).isPresent()) {
            application.setApplicationId(applicationId); // Ensure the ID is set to the existing one
            Application updatedApplication = applicationService.addApplication(application); // Reuse the addApplication
                                                                                             // method for updates
            return new ResponseEntity<>(updatedApplication, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{applicationId}")
    public ResponseEntity<Application> updateApplication1(
            @PathVariable Long applicationId,
            @RequestBody Application updatedApplication) {
        Optional<Application> existingApplication = applicationService.getApplicationById(applicationId);
        if (existingApplication.isPresent()) {
            Application application = existingApplication.get();
            // Update fields based on provided data
            if (updatedApplication.getName() != null) {
                application.setName(updatedApplication.getName());
            }
            if (updatedApplication.getEmail() != null) {
                application.setEmail(updatedApplication.getEmail());
            }
            // Add similar checks for other fields
            Application savedApplication = applicationService.addApplication(application);
            return ResponseEntity.ok(savedApplication);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/{applicationId}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long applicationId) {
        if (applicationService.deleteApplication(applicationId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
