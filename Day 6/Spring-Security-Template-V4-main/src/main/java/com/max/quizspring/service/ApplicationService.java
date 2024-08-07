package com.max.quizspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.max.quizspring.model.Application;
import com.max.quizspring.repo.Applicationrepo;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private Applicationrepo applicationRepo;

    public List<Application> getAllApplications() {
        return applicationRepo.findAll();
    }

    public Application addApplication(Application application) {
        return applicationRepo.save(application);
    }

    public Optional<Application> getApplicationById(Long applicationId) {
        return applicationRepo.findById(applicationId);
    }

    public Application updateApplication(Long applicationId, Application application) {
        if (applicationRepo.existsById(applicationId)) {
            application.setApplicationId(applicationId); // Ensure the ID is set to the existing one
            return applicationRepo.save(application); // Update the existing application
        }
        return application;
    }

    public boolean deleteApplication(Long applicationId) {
        if (applicationRepo.existsById(applicationId)) {
            applicationRepo.deleteById(applicationId);
            return true;
        }
        return false;
    }
}

// package com.max.quizspring.service;

// import com.max.quizspring.model.Application;

// import java.util.List;
// import java.util.Optional;

// public interface ApplicationService {
// List<Application> getAllApplications();

// Application addApplication(Application application);

// Optional<Application> getApplicationById(Long applicationId);

// Application updateApplication(Long applicationId, Application
// applicationDetails);

// Application partiallyUpdateApplication(Long applicationId, Application
// applicationDetails);

// boolean deleteApplication(Long applicationId);

// List<Application> searchApplicationsByName(String name);

// List<Application> searchApplicationsByEmail(String email);
// }
