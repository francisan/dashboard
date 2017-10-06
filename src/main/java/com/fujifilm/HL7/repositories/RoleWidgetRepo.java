package com.fujifilm.HL7.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fujifilm.HL7.model.RoleWidget;
import com.fujifilm.HL7.model.RoleWidgetId;
import com.fujifilm.HL7.model.Widget;

@Repository("roleWidgetRepo")
public interface RoleWidgetRepo extends JpaRepository<RoleWidget,RoleWidgetId>{
	
	@Query("SELECT w FROM RoleWidget rw join rw.id.role r join rw.id.widget w WHERE r.id= ?1")
	List<Widget> FindAllWidgetByRole(long roleId);
}
